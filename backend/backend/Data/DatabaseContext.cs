using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class DatabaseContext : DbContext
{
    private static bool _created = false;

    public DatabaseContext()
    {
        if (!_created)
        {
            _created = true;
            Database.EnsureCreated();
        }
    }

    protected override void OnConfiguring(DbContextOptionsBuilder b) => b.UseSqlite("Data Source=database.db");
    public DbSet<Reservation> Reservations { get; set; }
}