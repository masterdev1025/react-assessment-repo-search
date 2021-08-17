import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SearchBox from '../../components/SearchBox/SearchBox';
function Home() {
    return (
        <Container fixed style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ minWidth: '500px' }}>
                <Typography variant="h5" gutterBottom style={{ color: 'gray' }}>
                    Search repogitories...
                </Typography>
                <SearchBox style={{ width: '100%' }} />
            </div>
        </Container >
    )
}

export default Home;