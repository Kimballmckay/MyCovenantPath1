using MyCovenantPath1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("[controller]")]
[ApiController]
public class StudyController : ControllerBase
{
    private readonly CovenantPathDbContext _context;

    public StudyController(CovenantPathDbContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetStudies")]
    public async Task<IActionResult> Get()
    {
        var study = await _context.Studies
            .Select(s => new
            {
                s.StudyID,
                s.MembershipRN,
                s.StudyMaterialLink,
                s.Date
            })
            .ToListAsync();

        return Ok(study);
    }

}