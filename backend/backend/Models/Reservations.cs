using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Reservation
{
    [Key]
    public int Id { get; set; }
    public string Email { get; set; }
    
    public int Count { get; set;}
    
    public DateTime Date { get; set; }
}