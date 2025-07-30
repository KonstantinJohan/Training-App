using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainingApp.Data;
using TrainingApp.Core.Models;

namespace TrainingApp.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayersController : ControllerBase
{
    private readonly TrainingDbContext _context;

    public PlayersController(TrainingDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Player>>> GetAll()
    {
        return await _context.Players.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Player>> Create(Player player)
    {
        _context.Players.Add(player);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetAll), new { id = player.Id }, player);
    }
}