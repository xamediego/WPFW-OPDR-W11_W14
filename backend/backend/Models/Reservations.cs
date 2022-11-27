using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Reservation
{
    [Key]
    public int Id { get; set; }

    public DateTime Date { get; set; }

    public String Email { get; set; }
    
    public int aantal { get; set;}
}