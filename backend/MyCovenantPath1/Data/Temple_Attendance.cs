using System.ComponentModel.DataAnnotations;

namespace MyCovenantPath1.Data
{
    public class Temple_Attendance
    {
        [Key]
        public int TempleAttID  { get; set; }
        [Required]
        public int Attended {  get; set; }
        [Required]
        public string Date { get; set; }
        [Required]
        public int MembershipRN { get; set; }
    }
}
