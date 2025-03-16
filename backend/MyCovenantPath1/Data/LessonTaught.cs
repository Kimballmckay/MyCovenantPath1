using System.ComponentModel.DataAnnotations;

namespace MyCovenantPath1.Data
{
    public class LessonTaught
    {
        [Key]
        public int LessonID { get; set; }
        [Required]
        public string Date { get; set; }
        [Required]
        public int MembershipRN { get; set; }
        [Required]
        public int LessonsTaughtID { get; set; }
    }
}
