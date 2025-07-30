namespace TrainingApp.Core.Models;

public class Player
{
    public int Id { get; set; }
    public string Name { get; set; }
    public double? PR { get; set; }

    public ICollection<WorkoutAssignment> WorkoutAssignments { get; set; }
}




