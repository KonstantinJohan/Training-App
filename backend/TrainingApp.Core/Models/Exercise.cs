namespace TrainingApp.Core.Models;
public class Exercise
{
    public int Id { get; set; }
    public string Name { get; set; }

    // Generella övningsvärden
    public string? DistanceUnit { get; set; } // t.ex. "cm", "m"

    public ICollection<WorkoutExercise> WorkoutExercises { get; set; }
}