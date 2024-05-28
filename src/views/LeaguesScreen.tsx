import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet, Image, Modal, Button } from 'react-native';

const API_KEY = '890ff10966621e43fc1b90bb1d0dd1dd';

const LeaguesScreen = ({ navigation, region }) => {
    const [leagues, setLeagues] = useState([]);
    const [fixtures, setFixtures] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFixture, setSelectedFixture] = useState(null);
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        fetchLeagues();
    }, []);

    const fetchLeagues = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://v3.football.api-sports.io/leagues', {
                headers: {
                    'x-apisports-key': API_KEY
                }
            });
            const data = await response.json();
            const filteredLeagues = data.response.filter(league => {
                return league.league.type === 'League' && getRegion(league.country.name) === region;
            });
            setLeagues(filteredLeagues || []);
        } catch (error) {
            console.error('Error fetching leagues:', error);
        } finally {
            setLoading(false);
        }
    };

    const getRegion = (country) => {
        const europeCountries = ['England', 'Spain', 'Germany', 'Italy', 'France']; // Agrega más países de Europa aquí
        const americaCountries = ['USA', 'Brazil', 'Argentina']; // Agrega más países de América aquí

        if (europeCountries.includes(country)) return 'Europa';
        if (americaCountries.includes(country)) return 'America';
        return 'Rest Of the World';
    };

    const fetchFixtures = async (leagueId) => {
        try {
            setLoading(true);
            const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&last=15`, {
                headers: {
                    'x-apisports-key': API_KEY
                }
            });
            const data = await response.json();
            setFixtures(data.response || []);
        } catch (error) {
            console.error('Error fetching fixtures:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStatistics = async (fixtureId) => {
        try {
            setLoading(true);
            const response = await fetch(`https://v3.football.api-sports.io/statistics?fixture=${fixtureId}`, {
                headers: {
                    'x-apisports-key': API_KEY
                }
            });
            const data = await response.json();
            setStatistics(data.response || []);
        } catch (error) {
            console.error('Error fetching statistics:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLeaguePress = async (leagueId) => {
        setSelectedLeague(leagueId);
        await fetchFixtures(leagueId);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleFixturePress = async (fixture) => {
        setSelectedFixture(fixture);
        await fetchStatistics(fixture.fixture.id);
        navigation.navigate('MatchStats', { fixture, statistics });
    };

    const renderLeagueItem = (league) => {
        const logoUrl = league.league.logo;
        return (
            <TouchableOpacity
                key={league.league.id}
                onPress={() => handleLeaguePress(league.league.id)}
                style={styles.leagueContainer}
            >
                <Image source={{ uri: logoUrl }} style={styles.logo} />
                <Text style={styles.leagueText}>{league.league.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderFixtureItem = (fixture, index) => {
        return (
            <TouchableOpacity key={index} style={styles.fixtureContainer} onPress={() => handleFixturePress(fixture)}>
                <Text style={styles.fixtureText}>{fixture.teams.home.name} {fixture.score.fulltime.home} - {fixture.score.fulltime.away} {fixture.teams.away.name}</Text>
                <Text style={styles.dateText}>{new Date(fixture.fixture.date).toLocaleDateString()}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flexGrow: 1, backgroundColor: '#FFFFFF' }}>
            <ScrollView style={{ marginTop: 20 }}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <View>
                        {leagues.map(renderLeagueItem)}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={closeModal}
                        >
                            <View style={styles.modalContainer}>
                                <ScrollView>
                                    <Text style={styles.fixturesTitle}>Últimos 15 Partidos:</Text>
                                    {fixtures.map(renderFixtureItem)}
                                    <Button title="Volver" onPress={closeModal} />
                                </ScrollView>
                            </View>
                        </Modal>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    leagueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    leagueText: {
        fontSize: 16,
        textAlign: 'center',
    },
    fixturesTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    fixtureContainer: {
        backgroundColor: '#E5E5E5',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    fixtureText: {
        fontSize: 16,
        textAlign: 'center',
    },
    dateText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#999999',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default LeaguesScreen;
