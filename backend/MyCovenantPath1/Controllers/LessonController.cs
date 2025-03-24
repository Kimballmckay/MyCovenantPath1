using MyCovenantPath1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("[controller]")]
[ApiController]
public class LessonController : ControllerBase
{
    private readonly CovenantPathDbContext _context;

    public LessonController(CovenantPathDbContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetLessons")]
    public async Task<IActionResult> Get()
    {
        var lesson = await _context.Lessons
            .Select(l => new
            {
                l.LessonNumberID,
                l.LessonName
            })
            .ToListAsync();

        return Ok(lesson);
    }

}