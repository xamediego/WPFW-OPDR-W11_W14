using backend.Data;
using backend.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DatabaseContext>();

var allowedOrigins = "Allowed Cors";

builder.Services.AddCors(options =>
{
    options.AddPolicy(allowedOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    var s = app.Services.CreateScope().ServiceProvider;

    var dbcontext = s.GetRequiredService<DatabaseContext>();

    for (int i = 0; i < 16; i++)
    {
        dbcontext.Reservations.Add(new Reservation { aantal = 1, Date = DateTime.Today, Email = "Test" });
    }
    
    Console.WriteLine(dbcontext.Reservations.Count());

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(allowedOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();