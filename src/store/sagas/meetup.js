import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { MeetupActions } from '~/store/ducks/meetup';
import { showMessage } from 'react-native-flash-message';

import { navigate } from '~/services/navigation';

export function* createMeetup({ file, meetup }) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data; charset=utf-8;',
      },
    };

    const { data: fileData } = yield call(api.post, '/files', formData, config);

    const { data: meetupData } = yield call(api.post, '/meetups', {
      ...meetup,
      file_id: fileData.id,
    });

    yield put(MeetupActions.createMeetupSuccess(meetupData));

    showMessage({
      message: 'Meetup criado com sucesso!',
      type: 'success',
      duration: 3000,
    });

    navigate('Dashboard');
  } catch (error) {
    yield put(MeetupActions.meetupFailure(error.response.data));
  }
}

export function* getMeetups() {
  try {
    const { data: recommended } = yield call(api.get, '/meetups/?filter=recommended');
    const { data: subscribed } = yield call(api.get, '/meetups/?filter=subscribed');
    const { data: notSubscribed } = yield call(api.get, '/meetups/?filter=notsubscribed');

    const data = { recommended, subscribed, notSubscribed };

    yield put(MeetupActions.getMeetupsSuccess(data));
  } catch (error) {
    yield put(
      MeetupActions.meetupFailure({ message: 'Não foi possível carregar os dados no momento.' }),
    );
  }
}

export function* showMeetup({ id }) {
  try {
    const { data } = yield call(api.get, `/meetups/${id}`);

    yield put(MeetupActions.showMeetupSuccess(data));
  } catch (error) {
    yield put(
      MeetupActions.meetupFailure({ message: 'Não foi possível carregar os dados no momento.' }),
    );
  }
}
