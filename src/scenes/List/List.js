import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Divider,
    Link
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ScrollTop from 'react-scrolltop-button';
import NavigationSharpIcon from '@material-ui/icons/NavigationSharp';
import axios from 'axios';
import Header from '../../components/Header/Header';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

function RepoList(props) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(30);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const fetchData = async (q) => {

        setLoading(true);
        setError(false);
        try {
            const d = await axios.get(`https://api.github.com/search/repositories?q=${q}&per_page=${perPage}&page=${page}&sort=stars&order=desc***`);
            if (d && d.data.items) {
                setData(d.data.items);
            }
        } catch (e) {
            setError(true);
        }
        setLoading(false);
    }
    useEffect(() => {
        const { q } = props.match.params;
        fetchData(q);
    }, [props.match.url])
    return (
        <div>
            <Header />
            <div>
                <LoadingScreen text="Loading..." loading={loading} />
                <Container fixed >
                    <Typography component="div" style={{ minHeight: '100vh', paddingTop: '100px' }} >
                        {
                            error && <Alert severity="error">Something was wrong!</Alert>
                        }
                        <List>
                            {
                                data && data.map((item) => (
                                    <ListItem key={item.id}>
                                        <ListItemAvatar>
                                            <Avatar src={item.owner.avatar_url} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<Link href={item.html_url} target="_blank">{item.name}</Link>}
                                            secondary={
                                                `Pushed at: ${item.pushed_at}`
                                            }
                                        />
                                        <Divider />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Typography>
                </Container>
            </div>
            <ScrollTop
                distance={100}
                breakpoint={768}
                className="scroll-your-role"
                speed={500}
                target={0}
                icon={<NavigationSharpIcon />}
            />
        </div>
    )
}
export default RepoList