import icons from "./icons"
const {TbPencilPlus,BsFillFileEarmarkPostFill,FiUser} = icons
export const menuSidebar = [
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
        text:'Sửa thông tin cá nhân',
        icon: <FiUser/>,
        path:'/he-thong/sua-thong-tin-ca-nhan',
    },
    {
        id:4,
        text:'Liên hệ',
        icon: <FiUser/>,
        path:'/lien-he',
    },
    
]