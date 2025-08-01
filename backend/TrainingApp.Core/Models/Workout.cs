namespace TrainingApp.Core.Models;
public class Workout
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Date { get; set; }
    public string Time { get; set; }
    public string? Notes { get; set; }

    public ICollection<WorkoutExercise>? Exercises { get; set; }
    public ICollection<WorkoutAssignment>? Assignments { get; set; }
}