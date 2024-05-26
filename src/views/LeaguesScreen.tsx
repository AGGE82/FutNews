import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity, Modal, StyleSheet, Button } from 'react-native';

export default function LeaguesScreen({ navigation }) {
    const [leagues, setLeagues] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState(null);
    const [teams, setTeams] = useState([]);
    const [rounds, setRounds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const apiKey = '995bb159f2mshc2900441fa5f136p1c32e1jsn2ac5dc4d97bb';

    useEffect(() => {
        const fetchLeagues = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/leagues?1', {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                    }
                });
                const data = await response.json();
                console.log('Leagues Data:', data);
                setLeagues(data.response || []); // Ensure leagues is set to an empty array if data.response is undefined
            } catch (error) {
                console.error('Error al obtener las ligas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeagues();
    }, []);

    const fetchTeams = async (leagueId) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2023`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            });
            const data = await response.json();
            console.log(`https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2023`);
            if (data.response) {
                setTeams(data.response);
            } else {
                setTeams([]);
                console.warn('No se encontraron equipos para la liga:', leagueId);
            }
        } catch (error) {
            console.error('Error al obtener los equipos:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchRounds = async (leagueId) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=39&season=2023&current=true`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            });
            const data = await response.json();
            console.log('Rounds Data:', data);
            if (data.response) {
                setRounds(data.response);
            } else {
                setRounds([]);
                console.warn('No se encontraron rondas para la liga:', leagueId);
            }
        } catch (error) {
            console.error('Error al obtener las rondas:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLeagueSelect = async (league) => {
        setSelectedLeague(league);
        await fetchTeams(league.league.id);
        await fetchRounds(league.league.id);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={{ flexGrow: 1, backgroundColor: '#FFFFFF' }}>
            <ScrollView style={{ marginTop: 20 }}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <View>
                        {leagues && leagues.length > 0 ? (
                            leagues.map((league) => (
                                <TouchableOpacity key={league.league.id} onPress={() => handleLeagueSelect(league)}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                        <Image source={{ uri: `https://media.api-sports.io/football/leagues/${league.league.id}.png` }} style={{ width: 50, height: 50, marginRight: 10 }} />
                                        <Text style={{ fontSize: 16 }}>{league.league.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        ) : (
                            <Text>No leagues available.</Text>
                        )}
                    </View>
                )}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Equipos de {selectedLeague ? selectedLeague.league.name : ''}:</Text>
                        <ScrollView>
                            {teams.length > 0 ? (
                                teams.map((team) => (
                                    <View key={team.team.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                        <Image source={{ uri: team.team.logo }} style={{ width: 50, height: 50, marginRight: 10, backgroundColor: '#f0f0f0' }} />
                                        <Text>{team.team.name}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text>No se encontraron equipos para esta liga.</Text>
                            )}
                        </ScrollView>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Rondas de {selectedLeague ? selectedLeague.league.name : ''}:</Text>
                        <ScrollView>
                            {rounds.length > 0 ? (
                                rounds.map((round, index) => (
                                    <Text key={index} style={{ marginBottom: 10 }}>{round}</Text>
                                ))
                            ) : (
                                <Text>No se encontraron rondas para esta liga.</Text>
                            )}
                        </ScrollView>
                        <Button title="Cerrar" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});
