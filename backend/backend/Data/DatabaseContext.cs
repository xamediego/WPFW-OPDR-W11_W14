using backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;

namespace backend.Data;

public class DatabaseContext : DbContext
{

    // public DatabaseContext(DbContextOptions<DatabaseContext> options)
    //     : base(options)
    // {
    // }
    
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