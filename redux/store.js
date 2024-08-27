import { configureStore } from '@reduxjs/toolkit';
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
import { BranchEditAPI } from './queries/editBranchApi';
import { branchesAsPerCountryApi } from './queries/getAllBranchesAsPerCountryApi';
import { subjectDeleteApi } from './queries/deletSubjectApi';
import { addBatchApi } from './queries/addBatchApi';
import { adminCategorySortApi } from './queries/adminCategorySortApi';
import { AllCoursesApi } from './queries/getAllCourseForAdmin';
import { updateCategoryWeightage } from './queries/updateCategoryWeightageApi';
import { AddCategoryApi } from './queries/addCategoryApi';
import { updateCourseDnd } from './queries/updateCourseDndApi';
import { updateSubCategoryDnd } from './queries/updateSubCategoryDndApi';
import { categoryDeleteApi } from './queries/deleteCategoryApi';
import { categoryEditApi } from './queries/editCategoryApi';
import { AddCitiesApi } from './queries/addCitiesApi';
import { DeleteChapterApi } from './queries/DeleteChapterApi';
import { DeleteTopicApi } from './queries/DeleteTopicApi';
import { DeleteSubTopicApi } from './queries/DeleteSubTopicApi';
import { courseUnMapApi } from './queries/courseUnMapApi';
import { citiesForAdminApi } from './queries/getCitiesApi';
import { cityDeleteApi } from './queries/deleteCityApi';
import { unMapSubjectApi } from './queries/unMapSubjectApi';
import { batchListApi } from './queries/getAllBatchesApi';
import { getAllTrainersApi } from './queries/getAllTrainersApi';
import { branchOptions } from './queries/getAllBrancesDropDownApi';
import { batchDeleteApi } from './queries/deleteBatchApi';

const store = configureStore({
  reducer: {

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
    [allSubjectApiAsPerID.reducerPath]: allSubjectApiAsPerID.reducer,
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
    [branchesAsPerCountryApi.reducerPath]: branchesAsPerCountryApi.reducer,
    [BranchEditAPI.reducerPath]: BranchEditAPI.reducer,
    [getBranchDetailsByBranchIdApi.reducerPath]: getBranchDetailsByBranchIdApi.reducer,
    [branchesAsPerCountryApi.reducerPath]: branchesAsPerCountryApi.reducer,
    [subjectDeleteApi.reducerPath]: subjectDeleteApi.reducer,
    [addBatchApi.reducerPath]: addBatchApi.reducer,
    [adminCategorySortApi.reducerPath]: adminCategorySortApi.reducer,
    [AllCoursesApi.reducerPath]: AllCoursesApi.reducer,
    [updateCategoryWeightage.reducerPath]: updateCategoryWeightage.reducer,
    [AddCategoryApi.reducerPath]: AddCategoryApi.reducer,
    [updateCourseDnd.reducerPath]: updateCourseDnd.reducer,
    [updateSubCategoryDnd.reducerPath]: updateSubCategoryDnd.reducer,
    [categoryDeleteApi.reducerPath]: categoryDeleteApi.reducer,
    [categoryEditApi.reducerPath]: categoryEditApi.reducer,
    [DeleteChapterApi.reducerPath]: DeleteChapterApi.reducer,
    [DeleteTopicApi.reducerPath]: DeleteTopicApi.reducer,
    [DeleteSubTopicApi.reducerPath]: DeleteSubTopicApi.reducer,
    [AddCitiesApi.reducerPath]: AddCitiesApi.reducer,
    [courseUnMapApi.reducerPath]: courseUnMapApi.reducer,
    [citiesForAdminApi.reducerPath]: citiesForAdminApi.reducer,
    [citiesForAdminApi.reducerPath]: citiesForAdminApi.reducer,
    [unMapSubjectApi.reducerPath]: unMapSubjectApi.reducer,
    [getAllTrainersApi.reducerPath]: getAllTrainersApi.reducer,
    [batchListApi.reducerPath]: batchListApi.reducer,
    [branchOptions.reducerPath]:branchOptions.reducer,
    [batchDeleteApi.reducerPath]:batchDeleteApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesApi.middleware, degreeAndStreamApi.middleware, universitiesApi.middleware, collegesApi.middleware, statesApi.middleware, PlacementCountApi.middleware, LessthanSixtyApi.middleware, ThroughOutSixtyApi.middleware,
      ItandNonItApi.middleware, counsellorsApi.middleware, PlacementBranchApi.middleware, YearOfPassoutApi.middleware, PlacedDateBetweenApi.middleware, LoginApi.middleware, categoriesApi.middleware, allSubjectApi.middleware, mapSubjectApi.middleware, allSubjectApiAsPerID.middleware,
      CategoriesInCourseApi.middleware, contactUsApi.middleware, courseDetailsApi.middleware, courseAdderApi.middleware, subjectAdder.middleware, getAllBranchesApi.middleware, beancheDetailsApi.middleware, branchCourseApi.middleware,
      getHomePageCourseApi.middleware, courseCategoryMapApi.middleware, courseSubCategoryMapApi.middleware, getAllFaqApi.middleware, enquriesApi.middleware, courseWeightageApi.middleware, courseWeightageEditApi.middleware, getcourseByIdApi.middleware, CourseEditAPI.middleware,
      categoryUnMapApi.middleware, subCategortyUnMapApi.middleware, onlineCoursesApi.middleware, courseDeleteApi.middleware, courseEditerApi.middleware, getBranchDetailsByBranchIdApi.middleware, branchesAsPerCountryApi.middleware, BranchEditAPI.middleware, subjectDeleteApi.middleware,
      addBatchApi.middleware, adminCategorySortApi.middleware, AllCoursesApi.middleware, updateCategoryWeightage.middleware, AddCategoryApi.middleware, updateCourseDnd.middleware, updateSubCategoryDnd.middleware, categoryDeleteApi.middleware, categoryEditApi.middleware, DeleteChapterApi.middleware,
      DeleteTopicApi.middleware, DeleteSubTopicApi.middleware, AddCitiesApi.middleware, courseUnMapApi.middleware, citiesForAdminApi.middleware, cityDeleteApi.middleware, unMapSubjectApi.middleware, batchListApi.middleware, getAllTrainersApi.middleware,branchOptions.middleware,batchDeleteApi.middleware,
    ),
});

export default store; 
