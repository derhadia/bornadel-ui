import ProfileComponent from "./Profile/ProfileComponent";
import CourseHistoryComponent from "./CourseHistory/CourseHistoryComponent";
import QuestionsComponent from "./Questions/QuestionsComponent";
import TicketsComponent from "./Tickets/TicketsComponent";
import StudentComponent from './StudentComponent';

const Routes = [

    {
        path: "/student/profile", component: ProfileComponent
    },
    {
        path: "/student/courseHistory", component: CourseHistoryComponent
    },
    {
        path: "/student/questions", component: QuestionsComponent
    },
    {
        path: "/student/tickets", component: TicketsComponent
    }
];

export default Routes;