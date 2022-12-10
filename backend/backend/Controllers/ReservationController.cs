using System.ComponentModel.DataAnnotations;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
public class ReservationController : ControllerBase
{
    private readonly DatabaseContext _context;

    public ReservationController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpGet("GetAll")]
    public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
    {
        return await _context.Reservations.ToListAsync();
    }

    [HttpGet("GetFullDates/{start:datetime}to{end:datetime}")]
    public async Task<ActionResult<IEnumerable<DateTime>>> VerdelingPerDag(DateTime start, DateTime end)
    {
        return _context.Reservations.ToList()
            .Where(r => r.Date >= start && r.Date <= end)
            .GroupBy(r => r.Date).Where(r => r.Count() >= 10)
            .Select(r => { return r.Key; }).ToList();
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Reservation>> GetReservation(int id)
    {
        var reservation = await _context.Reservations.FindAsync(id);
        if (reservation == null)
            return NotFound();
        return reservation;
    }

    [HttpPost("Boek")]
    public async Task<ActionResult<Reservation>> PutReservation(Reservation reservation)
    {
        Console.WriteLine(reservation.Email + " | " + reservation.Date + " | " + reservation.Count);

        var email = new EmailAddressAttribute();

        var reservationCount = _context.Reservations.Count(r => r.Date.Day == reservation.Date.Day);

        Console.WriteLine("Count Check");

        if (reservation.Count > 10 || reservation.Count < 1)
        {
            Console.WriteLine($"Reservation count should be between 1 and 10, current: {reservation.Count}");
            return BadRequest($"Reservation count should be between 1 and 10, current: {reservation.Count}");
        }

        if (reservationCount + reservation.Count > 10)
        {
            Console.WriteLine($"Reservation count is too high {reservationCount} + {reservation.Count} < 11");
            return BadRequest($"Reservation count is too high {reservationCount} + {reservation.Count} < 11");
        }

        Console.WriteLine("Date check");

        if (reservation.Date.Date <= DateTime.Now.AddDays(-1).Date ||
            reservation.Date.Date >= DateTime.Now.AddDays(15).Date)
        {
            string error = $"Invalid DateTime {reservation.Date.Date} >= {DateTime.Now.Date} && {reservation.Date.Date} <= {DateTime.Now.AddDays(15).Date}";

            Console.WriteLine(error);
            return BadRequest(error);
        }

        Console.WriteLine("Email Check");

        if (!email.IsValid(reservation.Email))
        {
            Console.WriteLine($"Invalid email address = {reservation.Email}");
            return BadRequest($"Invalid email address = {reservation.Email}");
        }


        _context.Reservations.Add(reservation);

        await _context.SaveChangesAsync();

        return CreatedAtAction("GetReservation", new { id = reservation.Id }, reservation);
    }
}