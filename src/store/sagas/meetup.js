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

    navigate('DashBoard');
  } catch (error) {
    yield put(MeetupActions.createMeetupFailure(error.response.data));
  }
}
