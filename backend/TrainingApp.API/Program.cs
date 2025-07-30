using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using TrainingApp.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Registrera EF + SQLite
builder.Services.AddDbContext<TrainingDbContext>(options =>
    options.UseSqlite("Data Source=training.db"));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();