import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

const SaidebarHelpres = () => {

    const navigate = useNavigate()

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem('Tavar', 'sub1', <PieChartOutlined />, [
            getItem('Kiritish', '/'),
            getItem('Ko`rish', '/tavar'),
        ]),
        getItem('Dukon', 'sub2', <DesktopOutlined />, [
            getItem('Kiritish', '/dukon-kiritish'),
            getItem('Ko`rish', '/dukon-kurish'),
        ]),
    ];
    
    const onClick = (e) => {
        console.log(e.key);
        navigate(e.key);
    };

    return{
        items,
        routContent: onClick,
    }
}

export default SaidebarHelpres;