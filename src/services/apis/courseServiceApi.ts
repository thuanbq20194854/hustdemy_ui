import { FilterCoursesCategory } from '../../models/course'
import https from '../../utils/https'

export const courseServiceApi = {
  getCoursesSearch: (search: string, size: number, page: number, filter: FilterCoursesCategory): Promise<any> => {
    let url = `/courses/search-auth?page=${page}&size=${size}&search=${search}`

    if (filter.sort) {
      url += `&sort=${filter.sort}`
    }

    if (filter.rating) {
      url += `&rating=${filter.rating}`
    }

    if (filter.duration && Array.isArray(filter.duration)) {
      filter.duration.forEach((item) => {
        url += `&duration=${item}`
      })
    }

    if (filter.level && Array.isArray(filter.level)) {
      filter.level.forEach((item) => {
        url += `&level=${item}`
      })
    }
    return https.get(url)
  }
}
