export default interface CoursesType {
  enroll_type: number;
  is_free: boolean;
  id: string;
  image_file_url: string | null;
  short_description: string;
  title: string;
}

export default interface OrgAcademdyCourseListResponse {
  courseCount: number;
  courses: CoursesType[];
}
