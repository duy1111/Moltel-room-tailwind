import icons from "./icons"
const {TbPencilPlus,BsFillFileEarmarkPostFill,FiUser} = icons
export const menuManage = [
    {
        id:1,
        text:'Đăng tin cho thuê',
        path:'/he-thong/tao-moi-bai-dang',
        icon: <TbPencilPlus/>
    },
    {
        id:2,
        text:'Quản lý tin đăng',
        path:'/he-thong/quan-ly-bai-dang',
        icon: <BsFillFileEarmarkPostFill/>

    },
    {
        id:3,
        text:'Thông tin tài khoản',
        icon: <FiUser/>,
        path:'/he-thong/thong-tin-tai-khoan',
    }
]