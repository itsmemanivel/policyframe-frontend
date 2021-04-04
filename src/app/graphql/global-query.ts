/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';


/**
 * ----------------------------------------------------
 * Users query
 * ----------------------------------------------------
 * @method users
 */

export const addUser = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $role: String!, $image: String!, $createdtime: String!) {
    addUser(username: $username, email: $email, password: $password, role: $role, image: $image, createdtime: $createdtime) {
      _id
      username
      email
      password
      role
      image
      createdtime
    }
  }`;

export const getUsers = gql`
  query {
    getUsers{
      _id
      username
      email
      password
      role
      image
      createdtime

    }
  }`;



  export const getUserByEmail = gql`
    query getUserByEmail($email: String!){
      getUserByEmail(email: $email){

        _id
        username
        email
        password
        role
        image
        createdtime

      }
    }`;

export const getUser = gql`
  query getUser($_id: String!) {
    getUser(_id: $_id){
      _id
      username
      email
      password
      role
      image
      createdtime

    }
  }`;

export const deleteUser = gql`
  mutation deleteUser($_id: ID!) {
    deleteUser(_id: $_id)
  }`;

/**export const updateUser = gql`
  mutation updateUser($id: String!, $name: String!) {
    updateUser(id: $id, name: $name) {
      id
      name
    }
  }`;

*/




/**
 * ----------------------------------------------------
 * Testimonal query
 * ----------------------------------------------------
 * @method testimonal
 */

export const addTestimonal = gql`
  mutation addTestimonal($author: String!, $content: String!, $image: String!, $description: String!, $createdtime: String!) {
    addTestimonal(author: $author, content:$content, image: $image, description:$description, createdtime: $createdtime) {

      _id
      author
      content
      image
      description
      createdtime


   }
  }`;

export const getTestimonals = gql`
  query {
    getTestimonals{
      _id
      author
      content
      image
      description
      createdtime

    }
  }`;

export const getTestimonal = gql`
  query getTestimonal($_id: String!) {
    getTestimonal(_id: $_id){
      _id
      author
      content
      image
      description
      createdtime

    }
  }`;

export const deleteTestimonal = gql`
  mutation deleteTestimonal($_id: ID!) {
    deleteTestimonal(_id: $_id)
  }`;


  /**
 * ----------------------------------------------------
 * Blog query
 * ----------------------------------------------------
 * @method Blog
 */

export const addBlog = gql`
mutation addBlog($author: String!,$title: String!, $content: String!, $image: String!, $description: String!, $category: String!, $tags:String!,$createdtime: String!) {
  addBlog(author: $author, title: $title, content: $content, image: $image, description: $description, category: $category, tags: $tags, createdtime: $createdtime) {
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime
  }
}`;

export const getBlogs = gql`
query {
  getBlogs{
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const getBlog = gql`
query getBlog($_id: String!) {
  getBlog(_id: $_id){
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const deleteBlog = gql`
mutation deleteBlog($_id: ID!) {
  deleteBlog(_id: $_id)
}`;




  /**
 * ----------------------------------------------------
 * Ebook query
 * ----------------------------------------------------
 * @method Ebook
 */

export const addEbook = gql`
mutation addEbook($author: String!,$title: String!, $content: String!, $image: String!, $description: String!, $category: String!,  $tags: String! ,$createdtime: String!) {
  addEbook(author: $author, title: $title, content: $content, image: $image, description: $description, category: $category, tags: $tags, createdtime: $createdtime) {
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime
  }
}`

;

export const getEbooks = gql`
query {
  getEbooks{
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const getEbook = gql`
query getEbook($_id: String!) {
  getEbook(_id: $_id){
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const deleteEbook = gql`
mutation deleteEbook($_id: ID!) {
  deleteEbook(_id: $_id)
}`;




  /**
 * ----------------------------------------------------
 * EmbedVideo query
 * ----------------------------------------------------
 * @method EmbedVideo
 */

export const addEmbedVideo = gql`
mutation addEmbedVideo($author: String!,$title: String!, $content: String!, $image: String!, $description: String!, $category: String!, $tags:String!,$createdtime: String!) {
  addEmbedVideo(author: $author, title: $title, content: $content, image: $image, description: $description, category: $category, tags: $tags, createdtime: $createdtime) {
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime
  }
}`;

export const getEmbedVideos = gql`
query {
  getEmbedVideos{
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const getEmbedVideo = gql`
query getEmbedVideo($_id: String!) {
  getEmbedVideo(_id: $_id){
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const deleteEmbedVideo = gql`
mutation deleteEmbedVideo($_id: ID!) {
  deleteEmbedVideo(_id: $_id)
}`;



 /**
 * ----------------------------------------------------
 * Ppt query
 * ----------------------------------------------------
 * @method Ppt
 */

export const addPpt = gql`
mutation addPpt($author: String!,$title: String!, $content: String!, $image: String!, $description: String!, $category: String!, $tags:String!,$createdtime: String!) {
  addPpt(author: $author, title: $title, content: $content, image: $image, description: $description, category: $category, tags: $tags, createdtime: $createdtime) {
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime
  }
}`;

export const getPpts = gql`
query {
  getPpts{
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const getPpt = gql`
query getPpt($_id: String!) {
  getPpt(_id: $_id){
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const deletePpt = gql`
mutation deletePpt($_id: ID!) {
  deletePpt(_id: $_id)
}`;

 /**
 * ----------------------------------------------------
 * Template query
 * ----------------------------------------------------
 * @method Template
 */

export const addTemplate = gql`
mutation addTemplate($author: String!,$title: String!, $content: String!, $image: String!, $description: String!, $category: String!, $tags:String!,$createdtime: String!) {
  addTemplate(author: $author, title: $title, content: $content, image: $image, description: $description, category: $category, tags: $tags, createdtime: $createdtime) {
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime
  }
}`;

export const getTemplates = gql`
query {
  getTemplates{
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const getTemplate = gql`
query getTemplate($_id: ID!) {
  getTemplate(_id: $_id){
    _id
    author
    title
    content
    image
    description
    category
    tags
    createdtime

  }
}`;

export const deleteTemplate = gql`
mutation deleteTemplate($_id: ID!) {
  deleteTemplate(_id: $_id)
}`;
