import { configureStore } from '@reduxjs/toolkit';
import { courseApi } from './queries/getAllCourses';
import CourseReducer from './slices/courses/CourseSlice';
import CityReducer from './slices/placementFilter/CitiesSlice';
import { citiesApi } from './queries/getAllCities';
import { degreeAndStreamApi } from './queries/getDegreeAndStream';
import DegreeAndStreamReducer from './slices/placementFilter/DegreeAndStream';
import { universitiesApi } from './queries/getAllUniversities';
import UniversitiesReducer from './slices/placementFilter/UniversitiesStream';
import CollegesReducer from './slices/placementFilter/CollegesSlice'
import { collegesApi } from './queries/getAllColleges';
import { statesApi } from './queries/getAllStates';
import statesReducer from './slices/placementFilter/StatesSlice'
import { PlacementCountApi } from './queries/getAllPlacementCount';
import { LessthanSixtyApi } from './queries/getLessthanSixty';
import { ThroughOutSixtyApi } from './queries/getThroughOutSixty';
import { ItandNonItApi } from './queries/getItandNonIt';
import PlacementCountReducer from './slices/placementCount/PlacementCountSlice';
import LessthanSixtySliceReducer from './slices/placementCount/LessthanSixtySlice';
import ThroughOutSixtyReducer from './slices/placementCount/ThroughOutSixtySlice';
import ItandNonItReducer from './slices/placementCount/ItandNonItSlice';
import CounsellorFilterReducer from './slices/counsellorPlacementFilter/CounsellorFilterSlice';
import { counsellorsApi } from './queries/counsellorsApi';
import PlacementBranchReducer from './slices/placementCount/PlacementBranchSlice';
import { PlacementBranchApi } from './queries/getBranches';
import YearOfPassoutReducer from './slices/placementCount/YearOfPassoutSlice';
import { YearOfPassoutApi } from './queries/getYearOfPassout';
import PlacedDateBetweenReducer from './slices/placementCount/PlacedDateBetweenSlice';
import { PlacedDateBetweenApi } from './queries/getPlacedDateBetween';
import { LoginApi } from './queries/loginApi';
import { categoriesApi } from './queries/getAllCategories';
import { CategoriesInCourseApi } from './queries/getAllCategoriesInCourseForm';
import { contactUsApi } from './queries/contactUSApi'
import { courseDetailsApi } from './queries/getCoursedetails';


const store = configureStore({
  reducer: {
    [courseApi.reducerPath]: courseApi.reducer,
    getAllCourses: CourseReducer,

    [citiesApi.reducerPath]: citiesApi.reducer,
    getAllCities: CityReducer,

    [degreeAndStreamApi.reducerPath]: degreeAndStreamApi.reducer,
    getAllDegreeAndStream: DegreeAndStreamReducer,

    [universitiesApi.reducerPath]: universitiesApi.reducer,
    getAllUniversities: UniversitiesReducer,

    [collegesApi.reducerPath]: collegesApi.reducer,
    // getAllColleges: CollegesReducer,

    [statesApi.reducerPath]: statesApi.reducer,
    getAllStates: statesReducer,

    [PlacementCountApi.reducerPath]: PlacementCountApi.reducer,
    getAllPlacementCount: PlacementCountReducer,

    [LessthanSixtyApi.reducerPath]: LessthanSixtyApi.reducer,
    getLessthanSixty: LessthanSixtySliceReducer,

    [ThroughOutSixtyApi.reducerPath]: ThroughOutSixtyApi.reducer,
    getThroughOutSixty: ThroughOutSixtyReducer,

    [ItandNonItApi.reducerPath]: ItandNonItApi.reducer,
    getItandNonIt: ItandNonItReducer,

    [counsellorsApi.reducerPath]: counsellorsApi.reducer,

    [PlacementBranchApi.reducerPath]: PlacementBranchApi.reducer,
    getPlacementBranch: PlacementBranchReducer,

    [YearOfPassoutApi.reducerPath]: YearOfPassoutApi.reducer,
    getYearOfPassout: YearOfPassoutReducer,

    [PlacedDateBetweenApi.reducerPath]: PlacedDateBetweenApi.reducer,
    getPlacedBetween: PlacedDateBetweenReducer,

    [LoginApi.reducerPath]: LoginApi.reducer,

    [categoriesApi.reducerPath]: categoriesApi.reducer,

    [courseDetailsApi.reducerPath]: courseDetailsApi.reducer,

    [CategoriesInCourseApi.reducerPath]: CategoriesInCourseApi.reducer,
    [contactUsApi.reducerPath]: contactUsApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware, citiesApi.middleware, degreeAndStreamApi.middleware, universitiesApi.middleware, collegesApi.middleware, statesApi.middleware, PlacementCountApi.middleware, LessthanSixtyApi.middleware, ThroughOutSixtyApi.middleware,
      ItandNonItApi.middleware, counsellorsApi.middleware, PlacementBranchApi.middleware, YearOfPassoutApi.middleware, PlacedDateBetweenApi.middleware, LoginApi.middleware, categoriesApi.middleware,
      CategoriesInCourseApi.middleware, contactUsApi.middleware, courseDetailsApi.middleware),
}); 

export default store; 
