const initialState = {
  userData : {},
  repoData : []
}

export default function (state = initialState, action) {
  switch ( action.type ) {
    case 'GET_USER_DATA':
      return {...state, userData: action.userData}

      case 'GET_REPO_DATA':
      return {...state, repoData: action.repoData}

    default:
      return state
  }
}