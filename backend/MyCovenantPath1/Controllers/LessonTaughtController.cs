using MyCovenantPath1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("[controller]")]
[ApiController]
public class LessonTaughtController : ControllerBase
{
    private readonly CovenantPathDbContext _context;

    public LessonTaughtController(CovenantPathDbContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetLessonTaught")]
    public async Task<IActionResult> Get()
    {
        var lessontaught = await _context.LessonsTaught
            .Select(t => new
            {
                t.LessonID,
                t.Date,
                t.MembershipRN,
                t.LessonsTaughtID
            })
            .ToListAsync();

        return Ok(lessontaught);
    }

}