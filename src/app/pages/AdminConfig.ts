export class AdminConfig {
  // source api
  public static sourceAPI                   = 'https://imdb8.p.rapidapi.com/';

  // Login
  public static searchAPI                    = AdminConfig.sourceAPI + 'auto-complete';
  public static movieDetailsAPI              = AdminConfig.sourceAPI + 'title/get-overview-details';
  public static relatedInfoAPI               = AdminConfig.sourceAPI + 'title/get-full-credits';
  public static userReviewAPI                = AdminConfig.sourceAPI + 'title/get-user-reviews';


}
