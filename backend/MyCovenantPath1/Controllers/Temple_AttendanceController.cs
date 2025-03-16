using MyCovenantPath1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("[controller]")]
[ApiController]
public class Temple_AttendanceController : ControllerBase
{
    private readonly CovenantPathDbContext _context;

    public Temple_AttendanceController(CovenantPathDbContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetTemple_Attendance")]
    public async Task<IActionResult> Get()
    {
        var temple = await _context.Temple_Attendances
            .Select(a => new
            {
                a.TempleAttID,
                a.MembershipRN,
                a.Attended,
                a.Date
            })
            .ToListAsync();

        return Ok(temple);
    }

}
