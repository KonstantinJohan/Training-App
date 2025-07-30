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

//Cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
    policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.Urls.Add("http://0.0.0.0:5255");


app.UseCors("AllowAll");

app.MapControllers();

app.Run();