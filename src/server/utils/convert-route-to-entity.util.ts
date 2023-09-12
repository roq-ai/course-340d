const mapping: Record<string, string> = {
  contributions: 'contribution',
  courses: 'course',
  instructors: 'instructor',
  lessons: 'lesson',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
