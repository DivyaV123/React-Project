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
import { courseAdderApi } from './queries/courseAdderApi';
import { getAllBranchesApi } from './queries/getAllBranchData';
import { beancheDetailsApi } from './queries/getBranchDetails';
import { branchCourseApi } from './queries/getBranchCourseApi';
import { getHomePageCourseApi } from './queries/getHomePageCourse';
import { getAllFaqApi } from './queries/getAllFaq';
import { enquriesApi } from './queries/enquriesApi';
import { courseWeightageApi } from './queries/courseWeightageSaveApi';
import courseWeighEditSlice from './slices/courses/courseWeighEditSlice';
import { courseWeightageEditApi } from './queries/courseWeightageEditApi';
import { courseEditerApi } from './queries/courseById';
import { getcourseByIdApi } from './queries/getCourseById';
import courseEditDataSlice from './slices/courses/courseEditDataSlice';
import { CourseEditAPI } from './queries/editCourseApi';
import { subjectAdder } from './queries/addSubjectApi';
import { courseCategoryMapApi } from './queries/courseCategoryMapingApi';
import { courseSubCategoryMapApi } from './queries/courseSubCategoryMapApi';
import { categoryUnMapApi } from './queries/categoryUnMapApi';
import { subCategortyUnMapApi } from './queries/subCategortyUnMapApi';
import { allSubjectApi } from './queries/getAllSubjectsApi';
import { mapSubjectApi } from './queries/mapSubjectApi';
import { onlineCoursesApi } from './queries/getOnlineCoursesApi';
import { courseDeleteApi } from './queries/deleteCourse';
import { getBranchDetailsByBranchIdApi } from './queries/getBranchDetailsByBranchIdApi';
import { allSubjectApiAsPerID } from './queries/getSubjectAsPerIDApi';

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
    [allSubjectApi.reducerPath]: allSubjectApi.reducer,
    [mapSubjectApi.reducerPath]: mapSubjectApi.reducer,
    [courseDetailsApi.reducerPath]: courseDetailsApi.reducer,
    [allSubjectApiAsPerID.reducerPath]:allSubjectApiAsPerID.reducer,
    [CategoriesInCourseApi.reducerPath]: CategoriesInCourseApi.reducer,
    [contactUsApi.reducerPath]: contactUsApi.reducer,
    [subjectAdder.reducerPath]: subjectAdder.reducer,

    [courseAdderApi.reducerPath]: courseAdderApi.reducer,

    [getAllBranchesApi.reducerPath]: getAllBranchesApi.reducer,

    [beancheDetailsApi.reducerPath]: beancheDetailsApi.reducer,

    [branchCourseApi.reducerPath]: branchCourseApi.reducer,

    [getHomePageCourseApi.reducerPath]: getHomePageCourseApi.reducer,
    [getAllFaqApi.reducerPath]: getAllFaqApi.reducer,
    [enquriesApi.reducerPath]: enquriesApi.reducer,
    [courseWeightageApi.reducerPath]: courseWeightageApi.reducer,
    [courseWeightageEditApi.reducerPath]: courseWeightageEditApi.reducer,
    [courseEditerApi.reducerPath]: courseEditerApi.reducer,
    [getcourseByIdApi.reducerPath]: getcourseByIdApi.reducer,
    [CourseEditAPI.reducerPath]: CourseEditAPI.reducer,
    [courseCategoryMapApi.reducerPath]: courseCategoryMapApi.reducer,
    [courseSubCategoryMapApi.reducerPath]: courseSubCategoryMapApi.reducer,
    [categoryUnMapApi.reducerPath]: categoryUnMapApi.reducer,
    [subCategortyUnMapApi.reducerPath]: subCategortyUnMapApi.reducer,
    [onlineCoursesApi.reducerPath]: onlineCoursesApi.reducer,
    [courseDeleteApi.reducerPath]: courseDeleteApi.reducer,
    [getBranchDetailsByBranchIdApi.reducerPath]: getBranchDetailsByBranchIdApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware, citiesApi.middleware, degreeAndStreamApi.middleware, universitiesApi.middleware, collegesApi.middleware, statesApi.middleware, PlacementCountApi.middleware, LessthanSixtyApi.middleware, ThroughOutSixtyApi.middleware,
      ItandNonItApi.middleware, counsellorsApi.middleware, PlacementBranchApi.middleware, YearOfPassoutApi.middleware, PlacedDateBetweenApi.middleware, LoginApi.middleware, categoriesApi.middleware, allSubjectApi.middleware, mapSubjectApi.middleware,allSubjectApiAsPerID.middleware,
      CategoriesInCourseApi.middleware, contactUsApi.middleware, courseDetailsApi.middleware, courseAdderApi.middleware, subjectAdder.middleware, getAllBranchesApi.middleware, beancheDetailsApi.middleware, branchCourseApi.middleware,
      getHomePageCourseApi.middleware, courseCategoryMapApi.middleware, courseSubCategoryMapApi.middleware, getAllFaqApi.middleware, enquriesApi.middleware, courseWeightageApi.middleware, courseWeightageEditApi.middleware, getcourseByIdApi.middleware, CourseEditAPI.middleware,
      categoryUnMapApi.middleware, subCategortyUnMapApi.middleware, onlineCoursesApi.middleware, courseDeleteApi.middleware, courseEditerApi.middleware, getBranchDetailsByBranchIdApi.middleware
    ),
});

export default store; 
