import ServerSideTable from "../../../components/ServerSideTable";
import API_ROUTE from "../../../../api/apiRoutes";
import useUserTable from "../../../tables/UserTable";

const UserList = () => {
    const userList = API_ROUTE.GET_USERS;
    const { columns } = useUserTable();
    return (
        <div className=' w-100 p-3'>
            <ServerSideTable columns={columns} baseUrl={userList} />
        </div>
    );
};

export default UserList;
