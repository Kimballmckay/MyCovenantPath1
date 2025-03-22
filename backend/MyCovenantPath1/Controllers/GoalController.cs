using MyCovenantPath1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("[controller]")]
[ApiController]
public class GoalController : ControllerBase
{
    private readonly CovenantPathDbContext _context;

    public GoalController(CovenantPathDbContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetGoal")]
    public async Task<IActionResult> Get()
    {
        var goals = await _context.Goals
            .Select(g => new
            {
                g.GoalID,
                g.MembershipRN,
                g.TimeFrame,
                g.GoalDescription
            })
            .ToListAsync();

        return Ok(goals);
    }

}
