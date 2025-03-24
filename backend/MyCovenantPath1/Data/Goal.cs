using System.ComponentModel.DataAnnotations;

namespace MyCovenantPath1.Data
{
    public class Goal
    {
        [Key]
        public int GoalID { get; set; }
        [Required]
        public string GoalDescription { get; set; }
        [Required]
        public string TimeFrame { get; set; }
        [Required]
        public int MembershipRN { get; set; }

    }
}
