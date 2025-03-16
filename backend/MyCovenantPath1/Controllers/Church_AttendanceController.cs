using MyCovenantPath1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("[controller]")]
[ApiController]
public class Church_AttendanceController : ControllerBase
{
    private readonly CovenantPathDbContext _context;

    public Church_AttendanceController(CovenantPathDbContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetChurch_Attendance")]
    public async Task<IActionResult> Get()
    {
        var attendance = await _context.Church_Attendances
            .Select(a => new
            {
                a.Date,
                a.MembershipRN,
                a.Attended,
                a.ChurchAttID
            })
            .ToListAsync();

        return Ok(attendance);
    }

}
