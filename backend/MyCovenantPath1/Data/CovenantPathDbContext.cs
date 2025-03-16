using Microsoft.EntityFrameworkCore;
using MyCovenantPath1.Data;
using System.ComponentModel.DataAnnotations;

namespace MyCovenantPath1.Data
{
    public class CovenantPathDbContext : DbContext
    {
        public CovenantPathDbContext(DbContextOptions<CovenantPathDbContext> options) : base(options) { }

        public DbSet<Church_Attendance> Church_Attendances { get; set; }
        public DbSet<Goal> Goals { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<LessonTaught> LessonsTaught { get; set; }
        public DbSet<Study> Studies { get; set; }
        public DbSet<Temple_Attendance> Temple_Attendances { get; set; }
        public DbSet<User> Users { get; set; }

    }

}