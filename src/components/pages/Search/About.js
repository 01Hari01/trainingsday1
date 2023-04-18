import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    Paper,
    TableContainer,
    TableHead,
    TextField,
    Table,
    TableRow,
    TableCell,
    Container,
    TableBody,
    InputAdornment,
    Tabs,
    Tab,
    createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import SouthIndian from "./TypesOfMovies/SouthIndian";
import Hindi from "./TypesOfMovies/Hindi";
import English from "./TypesOfMovies/English";

// API KEY:http://www.omdbapi.com/?i=tt3896198&apikey=4af4548c
const About = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#0086FF",
            },
        },
    });
    const [searchResults, setSearchResults] = useState([]);
    const [language, setLanguage] = useState(0);
    const languageOptions = ["English", "Hindi", "SouthIndian"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(
            `http://www.omdbapi.com/?s=${searchQuery}&apikey=4af4548c`
        );
        console.log("inside handle submit", response);
        setSearchResults(response.data.Search);
    };

    const [searchQuery, setSearchQuery] = useState("");
    const handleLanguageChange = (_, newValue) => {
        setLanguage(newValue);
    };
    const getComponentBasedOnLanguage = () => {
        console.log("inside getComponentBasedOnLanguage", language);
        switch (language) {
            case 0:
                return <English />;
            case 1:
                return <Hindi />;
            case 2:
                return <SouthIndian />;
            default:
                return null;
        }
    };
useEffect(()=>{
    getComponentBasedOnLanguage()
},[language])
    return (
        <Container>
            <h1>About</h1>
            <ThemeProvider theme={theme}>
                <Tabs value={language} onChange={handleLanguageChange}>
                    {languageOptions.map((option, index) => (
                        <Tab key={index} label={<Link to={`/about/${option}`}>{option}</Link>} value={index} />
                    ))}

                </Tabs>
            </ThemeProvider>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit(e);
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon onClick={handleSubmit} />
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchResults &&
                            searchResults.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.Title}</TableCell>
                                    <TableCell>{item.Year}</TableCell>
                                    <TableCell>{item.Type}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default About;
