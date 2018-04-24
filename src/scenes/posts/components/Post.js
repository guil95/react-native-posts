import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

class Post extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.postTitle}> Post Title </Text>
        <Text style={style.postDescription}> Velit occaecat enim voluptate ullamco tempor sunt pariatur. Enim excepteur cupidatat tempor aute amet aute non tempor id occaecat voluptate. Lorem ea Lorem pariatur deserunt veniam anim exercitation exercitation id est esse anim duis qui.
Ad labore sit elit exercitation amet amet. Incididunt ullamco laborum nisi anim nulla eiusmod. Consequat dolor minim pariatur occaecat veniam. Proident laborum commodo non commodo occaecat ex quis ipsum velit. Anim ea non dolor velit nostrud eu velit minim ad ipsum do.
Non pariatur cupidatat elit incididunt officia labore ipsum ex. Nostrud consequat irure magna nulla quis quis incididunt nostrud cupidatat dolor non quis. Consectetur consectetur commodo duis ad aliquip aute Lorem Lorem. Pariatur ea fugiat sunt ipsum elit non reprehenderit.
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  },
  postTitle:{
    fontSize: 12,
    fontWeight: 'bold',

  },
  postDescription:{
    marginTop: 10,
  }
})

export default Post;
