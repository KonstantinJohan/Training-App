namespace TrainingApp.Core.Models;
public class WorkoutAssignment
{
    public int Id { get; set; }

    public int PlayerId { get; set; }
    public Player Player { get; set; }

    public int WorkoutId { get; set; }
    public Workout Workout { get; set; }

    public bool IsCompleted { get; set; }
    public DateTime? CompletedAt { get; set; }
}