
import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';
import { useAuth } from '../context/auth';

const Routes: React.FC = () => {
    const { signed } = useAuth();
    console.log(signed);
    return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;