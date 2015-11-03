using UFOProject.Models;

namespace UFOProject.Services
{
    public interface IReviewService
    {
        string AddReview(WrittenReview review);
    }
}