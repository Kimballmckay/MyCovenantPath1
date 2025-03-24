using System.ComponentModel.DataAnnotations;

namespace MyCovenantPath1.Data
{
    public class Lesson
    {
        [Key]
        public int LessonNumberID { get; set; }
        [Required]
        public string LessonName { get; set; }
    }
}
