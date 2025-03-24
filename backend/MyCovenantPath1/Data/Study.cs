using System.ComponentModel.DataAnnotations;

namespace MyCovenantPath1.Data
{
    public class Study
    {
        [Key]
        public int StudyID { get; set; }
        [Required]
        public string Date {  get; set; }
        [Required]
        public string StudyMaterialLink { get; set; }
        [Required]
        public int MembershipRN { get; set; }
    }
}
