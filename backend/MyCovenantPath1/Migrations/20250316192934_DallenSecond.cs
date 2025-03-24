using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyCovenantPath1.Migrations
{
    /// <inheritdoc />
    public partial class DallenSecond : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_LessonsTaught",
                table: "LessonsTaught");

            migrationBuilder.AlterColumn<int>(
                name: "LessonsTaughtID",
                table: "LessonsTaught",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<int>(
                name: "LessonID",
                table: "LessonsTaught",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_LessonsTaught",
                table: "LessonsTaught",
                column: "LessonsTaughtID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_LessonsTaught",
                table: "LessonsTaught");

            migrationBuilder.AlterColumn<int>(
                name: "LessonID",
                table: "LessonsTaught",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<int>(
                name: "LessonsTaughtID",
                table: "LessonsTaught",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_LessonsTaught",
                table: "LessonsTaught",
                column: "LessonID");
        }
    }
}
