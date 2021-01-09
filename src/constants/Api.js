// //---------------------------------------------------------
// const BaseUrl = "http://192.168.1.191/api/v1/"
// const BaseImageUrl="http://192.168.1.191/"
// -----------------------------------------------------
const BaseImageUrl = "https://api.bornadel.com/"
const BaseUrl = "https://api.bornadel.com/api/v1/"

export default {

    GET_EDUCATIONSUBJECT: BaseUrl + "EducationSubject/GetAll",
    GET_GetAllHomeTop: BaseUrl + "Academy/GetAllHomeTop",
    GET_RECENTVIEW: BaseUrl + "ClassRoom/GetAllLastViewHome",
    GET_GetARTICLEHOMEPAG: BaseUrl + "Article/GetAllTopHomePage",
    GET_GetAllNEWHOMEPAFE: BaseUrl + "News/GetAllTopHomePage",
    GET_GetAllCircleMainMenuHomePage: BaseUrl + "EducationSubject/GetAllCircleMainMenuHomePage",
    GET_GetAllCircleSubMenuHomePage: BaseUrl + "EducationSubject/GetAllCircleSubMenuHomePage",
    GET_GetAllLastViewHome: BaseUrl + "ClassRoom/GetAllLastViewHome",
    SHOWIMAGE: BaseImageUrl,
    GET_GetAllSpecialOfferHomePage: BaseUrl + "ClassRoom/GetAllSpecialOfferHomePage",
    GEt_SEARCHtextRESULT: BaseUrl + "ClassRoom/GetAllSearchHomePage",
    Get_GetAllSearchClassRoomList: BaseUrl + "ClassRoom/GetAllSearchClassRoomList",
    Get_GetAllInClassRoomList: BaseUrl + "EducationSubject/GetAllInClassRoomList",
    Get_GetAllClassroomLevel: BaseUrl + "ClassRoomLevel/GetAll",
    Get_GetAllClassroomLevel: BaseUrl + "ClassRoomLevel/GetAll",
    Get_GetAllTeacher: BaseUrl + "Teacher/GetAll",
    Get_GetAllAcademy: BaseUrl + "Academy/GetAll",
    Get_GetClassRoomDetail: BaseUrl + "ClassRoom/GetClassRoomDetail",
    Get_GetClassRoomDetailWeekDay: BaseUrl + "ClassRoom/GetClassRoomDetailWeekDay",
    Get_Get5PreviouseTeacherClassRoom: BaseUrl + "ClassRoom/Get5PreviouseTeacherClassRoom",
    Get_GetSimilarClassRooms: BaseUrl + "ClassRoom/GetSimilarClassRooms",
    Get_ArticleGetAllWithFilters: BaseUrl + "Article/GetAllWithFilters",
    Get_TeacherGetAll:BaseUrl+"Teacher/GetAll",
    Get_TeacherDiplomaGetAll:BaseUrl+"TeacherDiploma/GetAll",
    Get_TeacherDocGetAll:BaseUrl+"TeacherDoc/GetAll",
    Get_AcademyGetAll:BaseUrl+"Academy/GetAll",
    Get_QuestionGetAll:BaseUrl+"Question/GetAll",
    Get_ClassRoomDoc:BaseUrl+"ClassRoomDoc/GetAll",
    RegisterUser : `${BaseUrl}Users/RegisterUser`,
    Login: `${BaseUrl}Users/Login`,
    ConfirmMobileOrEmail:`${BaseUrl}Users/ConfirmMobileOrEmail`,
    ForgetPassword:`${BaseUrl}Users/ForgetPassword`,
    SetUserRole:`${BaseUrl}Users/SetUserRole`,
    GetCaptcha:`${BaseUrl}Users/GetCaptcha`,
    GetAllQuestion: `${BaseUrl}Question/GetAll`,
    GetAllNews: `${BaseUrl}News/GetAll`,
    GetAllNewsWithSorting: `${BaseUrl}News/GetAllNewsWithSorting`,
    SendDataContact: `${BaseUrl}ContactUs/Insert`
}
