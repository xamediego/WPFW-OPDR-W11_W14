using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

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
            .Select(r => { return r.Key;}).ToList();
        
        // return _context.Reservations.ToList()
        //     .Where(r => r.Date >= start && r.Date <= end)
        //     .GroupBy(r => r.Date).Where(r => r.Count() >= 10)
        //     .Select(r => { return new TestDto { date = r.Key, count = r.Count() }; }).ToList();

        // return _context.Reservations.ToList()
        //     .GroupBy(r => r.Date)
        //     .Select(g => { return (g.Key, g.Count()); }).ToList();
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Reservation>> GetReservering(int id)
    {
        var reservation = await _context.Reservations.FindAsync(id);
        if (reservation == null)
            return NotFound();
        return reservation;
    }

    [HttpPost("Boek")]
    public async Task<IActionResult> PutReservation(Reservation reservation)
    {
        if (reservation != null)
        {
            if (_context.Reservations.Count(r => r.Date == reservation.Date) < 10)
            {
                _context.Reservations.Add(reservation);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetReservering", new { id = reservation.Id }, reservation);
            }

            return BadRequest("More than 10 reservations for that date detected");
        }

        return NoContent();
    }
}

public class TestDto
{
    public DateTime date { get; set; }
    public int count { get; set; }
}