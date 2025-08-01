using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainingApp.Data;
using TrainingApp.Core.Models;

namespace TrainingApp.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WorkoutsController : ControllerBase
{
    private readonly TrainingDbContext _context;

    public WorkoutsController(TrainingDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Workout>>> GetAll()
    {
        return await _context.Workouts.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Workout>> Create(Workout workout)
    {
        _context.Workouts.Add(workout);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetAll), new { id = workout.Id }, workout);
    }
}