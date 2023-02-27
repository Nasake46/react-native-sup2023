import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

type Convert = {
  id: string;
  result: number;
};

const ConvertChangeItem = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Convert[]>([]);

  const getLatestChange = async () => {
    try {
      const response = await fetch('https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}&apikey=Q6ipt0QMz3KmJTbygzn8aaebqFPMb9Ua');
      const json = await response.json();
      setData(json.changes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLatestChange();
  }, []);

  return (
    <View style={{flex: 1, padding: 10}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.result}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default ConvertChangeItem;