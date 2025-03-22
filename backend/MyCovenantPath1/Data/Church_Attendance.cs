using System.ComponentModel.DataAnnotations;

namespace MyCovenantPath1.Data
{
    public class Church_Attendance
    {
        [Key]
        public int ChurchAttID { get; set; }
        [Required]
        public string Date { get; set; }
        [Required]
        public int MembershipRN { get; set; }
        [Required]
        public int Attended {  get; set; }
    }
}
